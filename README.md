# tamara.bilensky.ca

Website for Tamara Bilensky RMT.

## Infrascructure

Resources built using AWS Cloudformation. Creates an S3 Bucket to contain the react build output with a CloudFront distribution as both a CDN as well as to configure site with SSL certificate

[CloudFormation Script](template.yaml)

## Site

Actual site TBD, currently placeholder until proper template is found

[React Project Folder](site/)

## CI/CD

Leverages GitHub Actions to build and deploy site to S3 as well as to create CloudFront invalidations.

[Deploy Script](.github/workflows/main.yml)

## References

- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html
- https://github.com/aws-actions/configure-aws-credentials
