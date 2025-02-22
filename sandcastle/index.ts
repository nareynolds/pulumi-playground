import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("my-bucket");

// Create an AWS resource (S3 Bucket)
const bucket2 = new aws.s3.BucketV2("my-2nd-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;
