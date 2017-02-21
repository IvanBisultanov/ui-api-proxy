#!groovy

node('nodejs') {
  properties([
    buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '5', numToKeepStr: '10'))])

  def tokens = "${env.JOB_NAME}".tokenize('/')
  def branch = tokens[tokens.size()-1]

  try {
    notifyBuild('STARTED')

    stage ('Checkout') {
      checkout scm
    }

    def version = sh (returnStdout: true, script: "git rev-parse --short HEAD | tr -d '\n'")

    stage ('Build proxy (to test if it compiles)') {
      sh 'npm install'
    }
  }
  catch(e) {
    currentBuild.result = "FAILED"
    throw e
  }
  finally {
    notifyBuild(currentBuild.result)
  }
}

def notifyBuild(String buildStatus = 'STARTED') {
  buildStatus =  buildStatus ?: 'SUCCESS'

  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"

  // Override default values based on build status
  if (buildStatus == 'STARTED') {
    colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESS') {
    colorCode = '#00FF00'
  } else {
    colorCode = '#FF0000'
  }

  slackSend (color: colorCode, message: summary, channel: '#ci')
}
