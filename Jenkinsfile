pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // GitHub se code pull karega
                git url: 'https://github.com/PiyushProjects1997/PlaywrightTest', branch: 'feature/playwrightallurereport'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Node modules aur Playwright browsers install karega
                //bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Tumhare tests run honge
                bat 'npx playwright test --headed'
            }
        }

        stage('Generate Allure Report') {
            steps {
                // Allure results generate karega
                bat 'npx allure generate ./allure-results --clean -o ./allure-report'
            }
        }
    }
post {
    always {
        publishHTML(target: [
            reportDir: 'allure-report',
            reportFiles: 'index.html',
            reportName: 'Allure Report',
            keepAll: true,
            alwaysLinkToLastBuild: true,
            allowMissing: false
        ])
    }
}

}
