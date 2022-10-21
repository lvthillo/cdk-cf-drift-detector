import * as cdk from 'aws-cdk-lib';
import * as config from 'aws-cdk-lib/aws-config';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import { CdkSlackChatBot } from 'cdk-slack-chatbot';


export class CdkDriftDetectorStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const topicName = new cdk.CfnParameter(this, 'topicName', {
            type: 'String',
            description: 'The name of the SNS Topic',
        });

        const slackChannelId = new cdk.CfnParameter(this, 'slackChannelId', {
            type: 'String',
            description: 'The Slack channel ID',
        });

        const slackWorkSpaceId = new cdk.CfnParameter(this, 'slackWorkSpaceId', {
            type: 'String',
            description: 'The Slack workspace ID',
        });

        const slackChannelConfigName = new cdk.CfnParameter(this, 'slackChannelConfigName', {
            type: 'String',
            description: 'The Slack channel config name',
        });

        const slackIntegration = new CdkSlackChatBot(this, 'SlackIntegration', {
            topicName: topicName.valueAsString,
            slackChannelId: slackChannelId.valueAsString,
            slackWorkSpaceId: slackWorkSpaceId.valueAsString,
            slackChannelConfigName: slackChannelConfigName.valueAsString
        });

        const rule = new config.CloudFormationStackDriftDetectionCheck(this, 'Drift');
        rule.onComplianceChange('TopicEvent', {
            target: new targets.SnsTopic(slackIntegration.topic),
        });
    }
}