pipeline {
    agent any
    stages {
        stage('Init'){
            steps{
                sh "git clone https://github.com/damjan-dabovski/endava-chess"
            }
        }
        stage('Install'){
            steps{
                sh "npm install"
            }
        }
        stage('Build'){
            steps{
                sh "cd endava-chess"
                sh "ng build --prod --build-optimizer"
            }
        }
        stage('Copy to EC2'){
            steps{
                sh "scp -i angular-app-key-pair.pem ./dist ec2-user@ec2-18-191-67-30.us-east-2.compute.amazonaws.com:/home/ec2-user"
            }
        }
    }
}