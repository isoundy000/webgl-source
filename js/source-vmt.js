/*
 * Valve Source Engine Material (VMT) parsing
 */

/*
 * Copyright (c) 2011 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

"use strict";

//=============
// VMT
//=============

var SourceMaterial = Object.create(Object, {
    texture: {
        value: null
    },
    
    load: {
        value: function(gl, url) {
            var self = this;
            
            glUtil.loadTexture(gl, url + ".png", function(texture) {
                self.texture = texture;
            });
            
            /*var vmtXhr = new XMLHttpRequest();
            vmtXhr.open('GET', url + ".vmt", true);
            vmtXhr.responseType = "arraybuffer";
            vmtXhr.addEventListener("load", function() {
                var bspData = self._parseVmt(this.response);
            });
            vmtXhr.send(null);*/
            
            return this;
        }
    },
    
    _parseVmt: {
        value: function(buffer) {
            
        }
    },
    
});
