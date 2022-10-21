# Automated CloudFormation Detection with Slack notifications in CDK

This demo project creates a solution which makes use of [AWS Config cloudformation-stack-drift-detection-check managed rule](https://docs.aws.amazon.com/config/latest/developerguide/cloudformation-stack-drift-detection-check.html). AWS Config should be enabled within your account. You can enable AWS Config for CloudFormation stacks only. This can reduce the amount of recorded AWS Config events and can reduce cost.

## Architecture

## Create Slack Integration with AWS ChatBot


## Deploy Solution

* Clone repository

* Run `npm i`

* 

```
cdk deploy \
  --parameters topicName="slack-config" \
  --parameters slackChannelId="xxx" \
  --parameters slackWorkSpaceId="yyy" \
  --parameters slackChannelConfigName="slack-config"
```

## Use of Constructs

This CDK stack makes use of two constructs
* [CloudFormationStackDriftDetectionCheck](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-config.CloudFormationStackDriftDetectionCheck.html)
* [cdk-slack-chatbot](https://constructs.dev/packages/cdk-slack-chatbot/)

