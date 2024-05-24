pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('your_dockerhub_credentials_id')
        KUBECONFIG = credentials('your_kubeconfig_credentials_id')
    }

    stages {
        stage('Conteneurisation') {
            steps {
                script {
                    sh 'docker build -t your_image_name .'
                }
            }
        }
        stage('Push vers DockerHub') {
            steps {
                script {
                    sh 'docker login -u your_dockerhub_username -p $DOCKER_PASSWORD'
                    sh 'docker push your_image_name'
                }
            }
        }
        stage('Déploiement sur Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl expose deployment your_deployment_name --type=NodePort --port=80'
                    sh 'kubectl get nodes -o wide'
                }
            }
        }
    }
}