pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }
    stages {
        stage('check version') {
            steps {
                sh '''
                    docker version
                    docker compose version
                '''
            }
        }
        stage('sonarqube analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQube Scanner 5.0'
                    withSonarQubeEnv('Sonarqube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        // stage('push image to dockerhub') {
        //     steps {
        //         sh 'docker compose build'
        //         sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        //         sh 'docker compose push'
        //     }
        // }
    }
    post {
        always {
            sh 'docker logout'
            echo 'Complete, Good bye!!'
        }
    }
}

