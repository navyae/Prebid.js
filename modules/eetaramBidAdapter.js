import * as utils from '../src/utils.js';
import { registerBidder } from '../src/adapters/bidderFactory.js';
import { config } from '../src/config.js';
import { BANNER } from '../src/mediaTypes.js';

const BIDDER_CODE = 'eetaram';
const ENDPOINT_URL = 'https://dmx.districtm.io/b/v1';

/**
 * Purpose: build OpenRTB request template
 * @param referer
 * @param gdprApplies
 * @param uspConsent
 * @param consentString
 * @returns {{ext: {}, site: {ref: string, publisher: {}, page: (*|string)}, at: number, regs: {ext: {us_privacy: *, gdpr: number}, coppa: number}, id: string, imp: [], device: {}, user: {ext: {consent: *}}}}
 */
function buildOpenRTBRequestParams (
  referer,
  gdprApplies,
  uspConsent,
  consentString,
  validBidRequests) {
  return {
    id: '' + new Date().getTime(),
    imp: buildImpressionObject(validBidRequests),
    site: {
      page: referer || window.location.href,
      ref: window.document.referrer,
      publisher: {}
    },
    device: {},
    at: 1,
    user: {
      ext: {
        consent: consentString
      }
    },
    ext: {},
    regs: {
      coppa: config.getConfig('coppa') === true ? 1 : 0,
      ext: {
        gdpr: gdprApplies ? 1 : 0,
        us_privacy: uspConsent
      }
    }
  };
}

/**
 * Purpose: To filter banner ads from validBidRequests
 * @param bid
 * @returns {*}
 */
function isBannerAd(bid) {
  const {mediaTypes: { banner }} = bid;
  return typeof banner === 'object'
    ? banner.sizes && utils.isArray(banner.sizes)
    : false
}

/**
 *
 * @param sizes
 * @returns {{w: number, h: number}|*}
 */
function formatSizeAttributes(sizes) {
  if (utils.isArray(sizes[0])) {
    return {
      format: sizes.map(size => ({ w: size[0], h: size[1] }))
    }
  } else {
    return {
      w: parseInt(sizes[0], 10),
      h: parseInt(sizes[1], 10)
    }
  }
}

/**
 * Purpose: Build impressions object that comply with openRTB policies
 * @param validBidRequests
 * @returns {*}
 */
function buildImpressionObject(validBidRequests) {
  return validBidRequests
    .filter(eachBid => isBannerAd(eachBid))
    .map(eachBid => {
      const {bidId, params: { placementId }, mediaTypes: {banner: { sizes }}} = eachBid;
      return {
        id: bidId,
        tagid: placementId,
        secure: 1,
        banner: {
          ...formatSizeAttributes(sizes),
          topframe: utils.inIframe() ? 0 : 1,
        }
      }
    })
}
export const spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: [BANNER],
  /**
   * verify bid request param
   * @param bid
   * @returns {boolean}
   */
  isBidRequestValid: (bid) => !!(bid.params && bid.params.placementId),
  buildRequests: (validBidRequests, bidderRequest) => {
    // loop through validBidRequests and return something
    const {gdprConsent: {gdprApplies, consentString} = {}, uspConsent, refererInfo: {referer} = {}} = bidderRequest
    const bidRequestPayload = buildOpenRTBRequestParams(referer, gdprApplies, uspConsent, consentString)
    return {
      method: 'POST',
      url: ENDPOINT_URL,
      data: bidRequestPayload
    };
  },
  interpretResponse: (serverResponse, request) => {
    // parse the serverResponse and create a bidResponse object containing one or more bids
    return []
  },
  getUserSyncs: (syncOptions, serverResponses, gdprConsent, uspConsent) => {
    const syncs = [];
    return syncs;
  },
  onTimeout: (timeoutData) => {},
  onBidWon: (bid) => {},
  onSetTargeting: (bid) => {}
}
registerBidder(spec);
