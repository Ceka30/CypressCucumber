pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente_1"
                    }
                    steps {
                        git url: 'https://github.com/Ceka30/CypressCucumber.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run cypress run --record --key 9cabc50c-154f-4707-b2d9-8950dea0887b --parallel'
                    }
                }

                stage('Slave 2'){
                    agent {
                        label "Agente_2"
                    }
                    steps {
                        git url: 'https://github.com/Ceka30/CypressCucumber.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 9cabc50c-154f-4707-b2d9-8950dea0887b --parallel'
                    }
                }

                stage('Slave 3'){
                    agent {
                        label "Agente_3"
                    }
                    steps {
                        git url: 'https://github.com/Ceka30/CypressCucumber.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 9cabc50c-154f-4707-b2d9-8950dea0887b --parallel'
                    }
                }
            }
        }
    }
}
