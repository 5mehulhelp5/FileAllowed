/**
 * Copyright © Cytracon Webservices. All rights reserved.
 * See LICENSE.txt for license details.
 */

define(function () {
    'use strict';

    return function (imageUploader) {
        return imageUploader.extend({
            initialize: function () {
                this._super();

                if (typeof this.allowedExtensions === 'string') {
                    this.allowedExtensions += ' svg';
                    this.allowedExtensions += ' webp';
                    this.allowedExtensions += ' avif';
                }
            }
        });
    };
});
