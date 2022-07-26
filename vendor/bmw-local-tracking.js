var localform =
    {
        _config :{},
        config: function(obj) 
        {
            this._config = 
            {
                
                eventInfo:
                {
                    eventName: obj.eventInfo.eventName,
                    target: obj.eventInfo.target,
                    timestamp: obj.eventInfo.timestamp
                },
                category:
                {
                    primaryCategory: obj.category.primaryCategory,
                    subCategory01:obj.category.subCategory01,
                    subCategory02:obj.category.subCategory02
                }
              
            };

        }
    }

 
var form_data =
{
    _data:{},
    send_data: function(productName,manufacturer,serie,bodyType,mmdr)
{
    this._data =
    {
    productName : productName || 'NOT DEFINED',
    manufacturer : manufacturer || 'NOT DEFINED',
    serie : serie || 'NOT DEFINED',
    bodyType : bodyType || 'NOT DEFINED',
    mmdr : mmdr||'NOT DEFINED'
    };
   
}
}


var sendDTM = new function (){

    this.sendDTM = function(start) {

           var trackingString = "iframe_forms_"+localform._config.category.subCategory01.toLowerCase();
           var subCategory=localform._config.category.subCategory01;
           var eventName=localform._config.eventInfo.eventName;

           trackingObject= {
                 eventInfo:{
                       eventName: eventName,
                       target: localform._config.eventInfo.target,
                       timestamp: localform._config.eventInfo.timestamp
                 }, 
                category:{
                       primaryCategory: localform._config.category.primaryCategory,
                       subCategory01: subCategory,
                       subCategory02: localform._config.category.subCategory02

                },
                attributes:{
                //newsletterSelected: $('#checkNewsletter').is(':checked')
                }
           };
                if(!start)
                {
                trackingObject.attributes.productName = form_data._data.productName;
                trackingObject.attributes.manufacturer = form_data._data.manufacturer;
                trackingObject.attributes.serie = form_data._data.serie;
                trackingObject.attributes.bodyType = form_data._data.bodyType;
                trackingObject.attributes.mmdr = form_data._data.mmdr;
                }
            
           
           sendDTM.post(trackingObject, trackingString)
    }

    this.post = function(trackingObject, type) {
        console.log("HERE")
      // the arguments passed to window.top.digitals2.tracking.api.addEventTracking
      var args = [{}, trackingObject, 0];
      // the message posted to
      var message = null;

      try {
        // parse the json string.
        message = JSON.stringify({methodName: 'addEventTracking', args: args, type: type});
        // console.log(message);
      } catch (e) {
        if (console && console.error) {
          console.error(e);
        }
      }

      if (message) {
        window.top.postMessage(message, '*');
        console.log("I AM HERE")
        if (document.cookie.indexOf("iframe_test=true") > -1) {
           console.debug('iFrame: sent request to parent using the tracking parameter: ' + type + '\niFrame: message: ' + message);
       }

      } else {
        if (console && console.debug) {
          console.debug('could not post message');
        }
      }
    }
}