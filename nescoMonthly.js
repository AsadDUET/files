(function(){
                      var json={'ownerName': '','address': '','phone': '','balance': '','error': '','custID': '','updated': {'date':'','month':'','year':''},'consumerMonthData': {}}; 
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
                        // json["consumerMonthData"]={};
                        }
                        // var consumerRechargeData = document.getElementsByClassName('consumerRechargeData');
                        // [0].getAttribute('data-token');
                        for (var i = 1; i < _trLength; i++) {
                          var _td = _tr[i].getElementsByTagName("td");
                          var _arr = [].map.call( _td, function( td ) {
                              return td.innerHTML;
                          }).join( ',' );
                          var _data = _arr.split(",");
                          json["consumerMonthData"][_data[0]+map[_data[1]]]={
                            "year":_data[0],
                            "month":_data[1],
                            "recharge":_data[2],
                            "fine":_data[3],
                            "bill":_data[4],
                            "meterRent":_data[5],
                            "demandCharge":_data[6],
                            "vat":_data[9],
                            "TotalBill":_data[10],
                            "endBalance":_data[11],
                            "usage":_data[12],
                            "max":_data[13]
                            };
                        }
                      Flutter1.postMessage(JSON.stringify(json))})();
