#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkDriftDetectorStack } from '../lib/cdk-drift-detector-stack';

const app = new cdk.App();
new CdkDriftDetectorStack(app, 'CdkDriftDetectorStack');
