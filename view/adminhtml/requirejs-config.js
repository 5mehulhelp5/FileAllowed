/**
 * Copyright © Cytracon Webservices. All rights reserved.
 * See LICENSE.txt for license details.
 */

var config = {
    map: {
        '*': {
            'Magento_Backend/js/media-uploader': 'Cytracon_FileAllowed/js/media-uploader'
        }
    },
    config: {
        mixins: {
            'Magento_Ui/js/form/element/image-uploader': {
                'Cytracon_FileAllowed/js/form/element/image-uploader-mixin': true
            }
        }
    }
};
