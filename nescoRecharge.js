(function(){
                  var json={'ownerName': '','address': '','phone': '','balance': '','error': '','custID': '','updated': {'date':'','month':'','year':''}};
                  json['error']=document.evaluate('/html/body/div[1]/div/div/div/div[4]/div/div[2]/form/div[1]/div/label', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                  if (json['error']=='') {

                    json['balance']=document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[6]/div[2]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['phone']=document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[2]/div[2]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['ownerName']=document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[1]/div/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['address']=document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[2]/div[1]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['custID']=document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[3]/div[3]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    var updated=document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[6]/label[2]/small', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                    var date=updated.split(' ')[1];
                    var month=updated.split(' ')[2];
                    var year=updated.split(' ')[3];
                    var map={'January':'01','February':'02','March':'03','April':'04','May':'05','June':'06','July':'07','August':'08','September':'09','October':'10','November':'11','December':'12',}

                    json['updated']={date,'month':map[month],year};

                    var dataTable = document.getElementById("datatable");
                    var cells = dataTable.querySelectorAll("td");
                    var _trLength = dataTable.getElementsByTagName("tr").length;
                    var _tr= dataTable.getElementsByTagName("tr");
                    json["consumerRechargeData"]={};
                    }
                    var consumerRechargeData = document.getElementsByClassName('consumerRechargeData');
                    // [0].getAttribute('data-token');
                    for (var i = 0; i < consumerRechargeData.length; i++) {
                      var _td = _tr[i+1].getElementsByTagName("td");
                      var _arr = [].map.call( _td, function( td ) {
                          return td.innerHTML;
                      }).join( ',' );
                      var _data = _arr.split(",");
                      json['consumerRechargeData'][consumerRechargeData[i].getAttribute('data-token')]={
                      "data-purchasedate":consumerRechargeData[i].getAttribute('data-purchasedate'),
                        "data-token":consumerRechargeData[i].getAttribute('data-token'),
                        "data-totalamount":consumerRechargeData[i].getAttribute('data-totalamount'),
                        "data-purchaseamount":consumerRechargeData[i].getAttribute('data-purchaseamount'),
                        "status":_data[12]
                        };
                    }
                  Flutter.postMessage(JSON.stringify(json))})();
