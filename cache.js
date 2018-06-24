//-----------------------��������--------------------------
var _CacheFun = {
		__cache : {},
		//��ȡ���л������
		_getCacheObj: function() {
//            if (!this.__cache) {
//                this.__cache = {};
//            }
            return this.__cache || {};
        },
        //����һ�����󵽻�����
        _bindCache: function(id, data) {
            var cache = this._getCacheObj();
            cache[id] = data;
        },
        //��ȡһ������ӻ�����
        _getCache: function(id) {
            var cache = this._getCacheObj();
            if (cache) {
                if (id && id.length) {
                    return cache[id];
                } else {
                    return null;
                }
            }else{
            	return null;
            }
        },
        //��ջ���
        _clearCache: function() {
            this.__cache = {};
        }
};