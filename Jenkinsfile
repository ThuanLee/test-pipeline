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
                sh 'pwd'
                sh 'ls'
                sh 'docker compose build'
                sh 'docker compose push'
            }
        }
    }
    post {
        always {
            echo 'Complete, Good bye!!'
        }
    }
}

