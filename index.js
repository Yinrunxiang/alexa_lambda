/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This sample shows how to create a Lambda function for handling Alexa Skill requests that:
 *
 * - Custom slot type: demonstrates using custom slot types to handle a finite set of known values
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Minecraft Helper how to make paper."
 *  Alexa: "(reads back recipe for paper)"
 */

'use strict';

var AlexaSkill = require('./AlexaSkill'),
    recipes = require('./recipes');

var APP_ID = 'amzn1.ask.skill.3dfcb319-4313-4ee9-8785-86d6fc9af4c4'; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * MinecraftHelper is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var MinecraftHelper = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
MinecraftHelper.prototype = Object.create(AlexaSkill.prototype);
MinecraftHelper.prototype.constructor = MinecraftHelper;

MinecraftHelper.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechText = "Welcome to use G4 voice control, you can say turn on  or turn off device to control";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechText, repromptText);
};

MinecraftHelper.prototype.intentHandlers = {
    "openIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Device,
            itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Device for " + itemName,
            device = itemName,
            recipe = "ok",
            speechOutput,
            repromptOutput, token;
        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.openDevice(speechOutput, cardTitle, recipe, token, device);
    },
    "closeIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Device,
            itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Device for " + itemName,
            device = itemName,
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.closeDevice(speechOutput, cardTitle, recipe, token, device);

    },
    "closeIntent": function (intent, session, response) {
        var itemSlot = intent.slots.Device,
            itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Device for " + itemName,
            device = itemName,
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.closeDevice(speechOutput, cardTitle, recipe, token, device);

    },
    "acModeIntent": function (intent, session, response) {
        var deviceObj = intent.slots.Device,
            gradeObj = intent.slots.Grade,
            device = "",
            grade = ""
        if (deviceObj && deviceObj.value) {
            device = deviceObj.value.toLowerCase();
        }
        if (gradeObj && gradeObj.value) {
            grade = gradeObj.value.toLowerCase();
        }

        var cardTitle = "Device for " + device,
            operation = {
                device: device,
                grade: grade,
                intent: 'acMode',
                devicetype: 'ac',
                type: 'mode'
            },
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.operationDevice(speechOutput, cardTitle, recipe, token, operation);

    },
    "acTemperatureIntent": function (intent, session, response) {
        var deviceObj = intent.slots.Device,
            gradeObj = intent.slots.Grade,
            device = "",
            grade = ""
        if (deviceObj && deviceObj.value) {
            device = deviceObj.value.toLowerCase();
        }
        if (gradeObj && gradeObj.value) {
            grade = gradeObj.value.toLowerCase();
        }

        var cardTitle = "Device for " + device,
            operation = {
                device: device,
                grade: grade,
                intent: 'acTemperature',
                devicetype: 'ac',
                type: 'temperature'
            },
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.operationDevice(speechOutput, cardTitle, recipe, token, operation);

    },
    "acWindIntent": function (intent, session, response) {
        var deviceObj = intent.slots.Device,
            gradeObj = intent.slots.Grade,
            device = "",
            grade = ""
        if (deviceObj && deviceObj.value) {
            device = deviceObj.value.toLowerCase();
        }
        if (gradeObj && gradeObj.value) {
            grade = gradeObj.value.toLowerCase();
        }

        var cardTitle = "Device for " + device,
            operation = {
                device: device,
                grade: grade,
                intent: 'acWind',
                devicetype: 'ac',
                type: 'wind'
            },
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.operationDevice(speechOutput, cardTitle, recipe, token, operation);

    },
    "lightBrightnessIntent": function (intent, session, response) {
        var deviceObj = intent.slots.Device,
            gradeObj = intent.slots.Grade,
            device = "",
            grade = ""
        if (deviceObj && deviceObj.value) {
            device = deviceObj.value.toLowerCase();
        }
        if (gradeObj && gradeObj.value) {
            grade = gradeObj.value.toLowerCase();
        }

        var cardTitle = "Device for " + device,
            operation = {
                device: device,
                grade: grade,
                intent: 'lightBrightness',
                devicetype: 'light',
                type: 'brightness'
            },
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.operationDevice(speechOutput, cardTitle, recipe, token, operation);

    },
    "ledColorIntent": function (intent, session, response) {
        var deviceObj = intent.slots.Device,
            gradeObj = intent.slots.Grade,
            device = "",
            grade = ""
        if (deviceObj && deviceObj.value) {
            device = deviceObj.value.toLowerCase();
        }
        if (gradeObj && gradeObj.value) {
            grade = gradeObj.value.toLowerCase();
        }

        var cardTitle = "Device for " + device,
            operation = {
                device: device,
                grade: grade,
                intent: 'ledColor',
                devicetype: 'led',
                type: 'color'
            },
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.operationDevice(speechOutput, cardTitle, recipe, token, operation);

    },
    "musicNextIntent": function (intent, session, response) {
        var deviceObj = intent.slots.Device,
            gradeObj = intent.slots.Grade,
            device = "",
            grade = ""
        if (deviceObj && deviceObj.value) {
            device = deviceObj.value.toLowerCase();
        }
        if (gradeObj && gradeObj.value) {
            grade = gradeObj.value.toLowerCase();
        }

        var cardTitle = "Device for " + device,
            operation = {
                device: device,
                grade: grade,
                intent: 'musicNext',
                devicetype: 'music',
                type: 'next'
            },
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.operationDevice(speechOutput, cardTitle, recipe, token, operation);

    },
    "musicPreviousIntent": function (intent, session, response) {
        var deviceObj = intent.slots.Device,
            gradeObj = intent.slots.Grade,
            device = "",
            grade = ""
        if (deviceObj && deviceObj.value) {
            device = deviceObj.value.toLowerCase();
        }
        if (gradeObj && gradeObj.value) {
            grade = gradeObj.value.toLowerCase();
        }

        var cardTitle = "Device for " + device,
            operation = {
                device: device,
                grade: grade,
                intent: 'musicPrevious',
                devicetype: 'music',
                type: 'previous'
            },
            recipe = "ok",
            speechOutput,
            repromptOutput;

        speechOutput = {
            speech: recipe,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var token = session.user.accessToken
        response.operationDevice(speechOutput, cardTitle, recipe, token, operation);

    },
    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.SessionEndedRequest": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "You can tell G Four turn on or turn off device, or you can say exit";
        var repromptText = "You can tell G Four turn on or turn off device, or you can say exit";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    },
    "AMAZON.FallbackIntent": function (intent, session, response) {
        var speechText = "You can tell G Four turn on or turn off device, or you can say exit";
        var repromptText = "You can tell G Four turn on or turn off device, or you can say exit";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    },
};

exports.handler = function (event, context) {
    var minecraftHelper = new MinecraftHelper();
    minecraftHelper.execute(event, context);
};
