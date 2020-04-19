jQuery("#simulation")
  .on("click", ".s-82fce0b7-1c36-4036-8986-15a94b786570 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Triangle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7787879a-ae75-4755-9640-9e80f33c8375"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-directions_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tap-button_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-tap-button_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-located-fixed_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tap-button_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-tap-button_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_110")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#4384F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_111")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#4384F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_112")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#4384F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_113")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#4384F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4384F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-color": "#4384F7",
                        "border-right-color": "#4384F7",
                        "border-bottom-color": "#4384F7",
                        "border-left-color": "#4384F7",
                        "-pie-background": "#4384F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-82fce0b7-1c36-4036-8986-15a94b786570 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });