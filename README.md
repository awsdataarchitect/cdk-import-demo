# Open-source repository with end-to-end guide for importing existing KMS-CMK keys created from AWS Management Console into a CDK Stack

This is a CDK project written in TypeScript to demo how to leverage CDK Import, focusing specifically on the migration of KMS keys into your CDK stack. 

For more details on how to import and uncomment the code blocks for Step 3 in the stack file, please refer to the [Blog Post](https://medium.com/aws-in-plain-english/effectively-managing-your-aws-infrastructure-using-cdk-9190ad7f5fe2).


The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
