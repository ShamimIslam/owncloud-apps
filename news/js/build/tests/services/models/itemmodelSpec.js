// Generated by CoffeeScript 1.4.0

/*

ownCloud - News

@author Bernhard Posselt
@copyright 2012 Bernhard Posselt nukeawhale@gmail.com

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
License as published by the Free Software Foundation; either
version 3 of the License, or any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU Affero General Public
License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/


(function() {

  describe('_ItemModel', function() {
    var _this = this;
    beforeEach(module('News'));
    beforeEach(inject(function(_ItemModel, _Model) {
      _this._ItemModel = _ItemModel;
      _this._Model = _Model;
    }));
    return it('should extend model', function() {
      return expect(new _this._ItemModel instanceof _this._Model).toBeTruthy();
    });
  });

}).call(this);