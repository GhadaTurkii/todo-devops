pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/GhadaTurkii/todo-devops.git'
            }
        }
        
        stage('Build') {
            steps {
               docker.build("ghada/todo-devops:${env.BUILD_NUMBER}")
            }
        }
        
        stage('Push') {
            steps {
                docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                    docker.image("ghada/todo-devops:${env.BUILD_NUMBER}").push()
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
        
}
}