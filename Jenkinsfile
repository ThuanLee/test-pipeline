pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }
    stages {
        stage('Check docker') {
            steps {
                sh '''
                    docker version
                    docker compose version
                '''
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQube Scanner 5.0'
                    withSonarQubeEnv('Sonarqube') {
                        sh "${scannerHome}/bin/sonar-scanner 
                        -Dsonar.projectKey=develop 
                        -Dsonar.inclusions=frontend/src/**, backend/**, nginx/**"
                    }
                }
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 3, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Build and push image to dockerhub') {
            steps {
                sh 'docker compose build'
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh 'docker compose push'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
            echo 'Complete, Good bye!!'
        }
    }
}

