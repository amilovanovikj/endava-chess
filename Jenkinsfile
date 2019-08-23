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
                sh "cd endava-chess"
                sh "npm install"
            }
        }
        stage('Build'){
            steps{
                sh "ng build --prod --build-optimizer"
            }
        }
        stage('Copy to EC2'){
            steps{
                sh "scp -i kpChessGame.pem ./dist ec2-user@ec2-18-191-67-30.us-east-2.compute.amazonaws.com:/home/ec2-user"
            }
        }
    }
}