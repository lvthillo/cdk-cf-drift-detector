# Automated CloudFormation Detection with Slack Notifications in CDK

This demo project creates a solution which makes use of [AWS Config cloudformation-stack-drift-detection-check managed rule](https://docs.aws.amazon.com/config/latest/developerguide/cloudformation-stack-drift-detection-check.html). AWS Config should be enabled within your account. You can enable AWS Config for CloudFormation stacks only. This can reduce the amount of recorded AWS Config events and can reduce cost.

## Architecture
![CDK](https://user-images.githubusercontent.com/14105387/197257392-695a6bfa-af11-4871-98b8-478a9eb10f0e.png)

## Create Slack Integration with AWS ChatBot
* AWS Console > AWS Chatbot > Configure new client
<img width="692" alt="slack" src="https://user-images.githubusercontent.com/14105387/197257125-2bfdb2c7-fde7-48a3-acf9-2eed87bd5021.png">



## Deploy Solution
* Clone repository
* Run `npm i`
* Run `cdk deploy`

```
cdk deploy \
  --parameters topicName="slack-config" \
  --parameters slackChannelId="xxx" \
  --parameters slackWorkSpaceId="yyy" \
  --parameters slackChannelConfigName="slack-config"
```

## Demo output
<img width="621" alt="slack1" src="https://user-images.githubusercontent.com/14105387/197258062-fd4d5ce0-0ac3-44d5-a4c2-5e153ef90741.png">

## Use of Constructs

This CDK stack makes use of two constructs:
* [CloudFormationStackDriftDetectionCheck](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-config.CloudFormationStackDriftDetectionCheck.html)
* [cdk-slack-chatbot](https://constructs.dev/packages/cdk-slack-chatbot/)

