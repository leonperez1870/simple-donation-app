#Donation App
FaaS Web App with continuous deployment to AWS Lambda

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

##Overview

The function of this web app is to take in donations from a form, send a post request with the donation amount, store it in a local json file and update the front end accordingly with the updated data. This web app uses [Serverless Framework](https://serverless.com/) for deployment to [AWS λ](https://aws.amazon.com/lambda) and [API Gateway](https://aws.amazon.com/api-gateway) via [Travis CI](https://travis-ci.org). The [serverless-offline](https://github.com/dherault/serverless-offline) plugin allows for local development.

**Features:**

* EJS templating
* Serverless Offline
* CI/CD with Travis from GitHub to AWS λ

## Getting started

The straightforward approach:

```bash
# Install all the dependencies
npm i

# Globally install serverless
npm i -g serverless

# Command to run serverless offline local development
sls offline
```

You could run `sls deploy` and simply deploy from here on out, but since Travis does this for you and deploys a Lambda function based on your stage, you would just need to [activate Travis CI](https://travis-ci.org/getting_started).

## CI/CD commands

Depending on what stage of development you are in, Travis will run `sls deploy` with the build stage that your team is in.

Example of this in `deployment/deploy.sh`

```sh
if [[ $BRANCH == 'master' ]]; then
  STAGE="prod"
elif [[ $BRANCH == 'staging' ]]; then
  STAGE="staging"
elif [[ $BRANCH == 'development' ]]; then
  STAGE="dev"
fi
```

Feel free to change the stage name in accordance to the GitHub branch and stage name that you're in.
