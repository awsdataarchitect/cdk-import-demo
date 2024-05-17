import * as cdk from 'aws-cdk-lib';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as iam from 'aws-cdk-lib/aws-iam';

import { Construct } from 'constructs';

export class CdkImportDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const key = new kms.Key(this, 'my-kms-key', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      pendingWindow: cdk.Duration.days(7),
      alias: 'alias/mykey',
      description: 'KMS key for encrypting the objects in an S3 bucket',
      enableKeyRotation: false,
    });

    // Step 3 uncomment below
    /*
    const policyDocument = {
      "Version": '2012-10-17',
      "Id": "updated policy",
      "Statement":
        [
          {
            "Sid": "Enable IAM User Permissions",
            "Effect": "Allow",
            "Principal": {
              "AWS": "arn:aws:iam::123456789012:root" //replace 123456789012
            },
            "Action": "kms:*",
            "Resource": "*"
          },
          {
            "Sid": "Allow access for Key Administrators",
            "Effect": "Allow",
            "Principal": {
              "AWS": [
                "arn:aws:iam::283023040015:user/vivek",  //replace 123456789012
                "arn:aws:iam::283023040015:role/dms-vpc-role"  //replace 123456789012

              ]
            },
            "Action": [
              "kms:Create*",
              "kms:Describe*",
              "kms:Enable*",
              "kms:List*",
              "kms:Put*",
              "kms:Update*",
              "kms:Revoke*",
              "kms:Disable*",
              "kms:Get*",
              "kms:Delete*",
              "kms:TagResource",
              "kms:UntagResource",
              "kms:ScheduleKeyDeletion",
              "kms:CancelKeyDeletion",
              "kms:RotateKeyOnDemand"
            ],
            "Resource": "*"
          }
        ]
    };
    */


    const keytoimport = new kms.Key(this, 'import-kms-key', {
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      // description: 'updated desc',
      // Step 3 uncomment below
      // policy: iam.PolicyDocument.fromJson(policyDocument),
    });



    //add tag to keytoimport
    // Step 3 uncomment below
    //cdk.Tags.of(keytoimport).add('cdk', 'yes');



    new cdk.CfnOutput(this, 'key-arn', {
      value: key.keyArn,
    });


  }
}





