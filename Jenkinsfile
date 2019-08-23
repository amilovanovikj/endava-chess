pipeline {
    agent any
    stages {
        stage ('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Install'){
            steps{
                sh "npm install"
            }
        }
        stage('Build'){
            steps{
                sh '$(npm bin)/ng build --prod --build-optimizer'
            }
        }
        stage('Copy to EC2'){
            steps{
                sh "scp -i angular-app-key-pair.pem ./dist/ ec2-user@ec2-3-15-211-129.us-east-2.compute.amazonaws.com:/var/www/angular-app/"
            }
        }
    }
}