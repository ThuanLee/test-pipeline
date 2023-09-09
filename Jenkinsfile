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
                sh 'docker compose up -d'
                sh 'docker compose ps'
            }
        }
    }
    post {
        always {
            sh 'docker compose ps'
        }
    }
}

