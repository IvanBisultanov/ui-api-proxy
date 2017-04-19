#!groovy

node('nodejs') {
  properties([
    buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '5', numToKeepStr: '10'))])

  def branch = env.BRANCH_NAME

  try {
    notifyBuild('STARTED')

    stage ('Checkout') {
      checkout scm
    }

    def version = sh (returnStdout: true, script: "git rev-parse --short HEAD | tr -d '\n'")

    stage ('Build proxy (to test if it compiles)') {
      sh 'npm install'
    }

    if (branch.startsWith('auto-update-')) {
      stage ('Try create PR') {
        try {
          sh "git checkout ${branch}"
          withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: '64022ff7-f3aa-4b9f-9b59-80753deac696', usernameVariable: 'GITHUB_USER', passwordVariable: 'GITHUB_TOKEN']]) {
            def prUrl = sh (
              returnStdout: true,
              script: "hub pull-request -m '${branch}'").trim()

            slackSend (color: '#b3d4fc', message: "Maybe merge? - ${prUrl}", channel: '#dev-front-end')
          }
        }
        catch (e) {
          // Catch everything, PR doesn't need to pass
        }
      }
    } else if (branch.startsWith('PR-') && "${env.CHANGE_TITLE}".startsWith('auto-update-')) {
      stage ('Merge PR') {
        def branchTokens = branch.tokenize('-')
        def prId = branchTokens[branchTokens.size() - 1]

        build (
          job: '/github-jobs/auto-merge-api-proxy', 
          quietPeriod: 30, 
          wait: false, 
          parameters: [[$class: 'StringParameterValue', name: 'pullRequestId', value: prId]])
      }
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
    if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'release') {
      slackSend (color: colorCode, message: summary, channel: '#dev-front-end')
    }
  }

  slackSend (color: colorCode, message: summary, channel: '#ci')
}
