pipeline {
    agent any

    tools {
        nodejs "node" // Must match name in Jenkins > Global Tool Configuration
    }

    environment {
        CI = 'true'
        APP_DIR = 'portfolio-main'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                dir("${APP_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            steps {
                echo 'Running linter...'
                dir("${APP_DIR}") {
                    sh 'npm run lint'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                dir("${APP_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: "${APP_DIR}/dist/**", fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Build successful! Ready for deployment.'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
