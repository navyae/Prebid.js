# Overview

```
Module Name: Eetaram Bidder Adapter
Module Type: Bidder Adapter
Maintainer: navya.eetaram@gmail.com
```

# Description

Module that connects to Eetaram's demand sources

# Test Parameters
```
    var adUnits = [
        {
            code: 'test-div',
            mediaTypes: {
                banner: {
                    sizes: [[300, 250]],  // a display size
                }
            },
            bids: [
                {
                    bidder: "eetaram",
                    params: {
                        placementId: '12345'
                    }
                }
            ]
        }
    ];
```
