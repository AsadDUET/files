(function(){
                  var json={'ownerName': '','address': '','phone': '','balance': '','error': '','custID': '','updated': {'date':'','month':'','year':''}};
                  json['error']=document.evaluate('/html/body/div[1]/div/div/div/div[4]/div/div[2]/form/div[1]/div/label', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                  if (json['error']=='') {
                  console.log('###########################################');
                  var forms = document.getElementsByTagName('form');
                  var formTwoInputs = {};
                  aa=[];
                  bb=[];
                  if (forms.length >= 2) {
                  formTwoInputs['formTwo'] = {};
                  var inputFields = forms[1].getElementsByTagName('input');
                  var labelFields = forms[1].getElementsByTagName('label');
                  for (var i = 0; i < inputFields.length; i++) {
                  formTwoInputs['formTwo'][inputFields[i].name] = inputFields[i].value;
                  aa.push(inputFields[i].value);
                  bb.push(labelFields[i].innerHTML)
                  }
                  }

                   console.log(aa);
                  //  console.log(bb[bb.length-1]);
                   // Extract the date, month, and year using regular expressions
                    var dateRegex = /([0-9]{1,2}) ([A-Za-z]+) ([0-9]{4})/;
                    var dateMatch = bb[bb.length-1].match(dateRegex);

                    // If a match was found, extract the values
                    if (dateMatch) {
                    var date = dateMatch[1];
                    var month = dateMatch[2];
                    var year = dateMatch[3];

                    console.log(date, month, year); // Output: 31 December 2022
                    } else {
                    console.log("No date found in text");
                    }
                  console.log('###########################################');

                    json['ownerName']=aa[0];//document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[1]/div/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['address']=aa[1];//document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[2]/div[1]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['phone']=aa[2];//document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[2]/div[2]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['balance']=aa[13];//document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[6]/div[2]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    json['custID']=aa[5];//document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[3]/div[3]/input', document, null, XPathResult.ANY_TYPE, null).iterateNext().value;
                    // var updated=document.evaluate('/html/body/div[1]/div[1]/div/div/div[5]/div/div/form/div[6]/label[2]/small', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
                    // var date=updated.split(' ')[1];
                    // var month=updated.split(' ')[2];
                    // var year=updated.split(' ')[3];
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
