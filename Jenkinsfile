pipeline {
    agent any
    stages {
        stage('check version') {
            steps {
                sh '''
                    docker version
                    docker compose version
                '''
            }
        }
        stage('build container') {
            steps {
                sh 'container compose up -d'
                sh 'container compose ps'
            }
        }
    }
    post {
        always {
            sh 'docker compose down'
            sh 'docker compose ps'
        }
    }
}

