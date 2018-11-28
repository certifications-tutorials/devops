// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller



function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.
	
	
	
	$scope.items = [
		
		{
			url: 'https://www.devopsschool.com/video/devops/DevOps-Essentials.html',
			title: 'DevOps Fundamental',
			
		},
		{
			url: 'https://www.devopsschool.com/video/devops/Complete-CICD-Implementation-from-Scratch.html',
			title: 'Complete CICD Implementation from Scratch',
			
		},
		{
			url: 'https://www.devopsschool.com/video/devops/cicd-pipeline-using-jenkins.html',
			title: 'CICD Pipeline Using Jenkins',
			
		},
		{
			url: 'https://www.devopsschool.com/video/docker/index.html',
			title: 'Docker Video Library',
			
		},
		{
			url: 'https://www.devopsschool.com/video/aws/index.html',
			title: 'Amazon AWS ALL',
			
		},
		{
			url: 'https://www.devopsschool.com/video/git/index.html',
			title: 'Git Video Tutorials',
			
		},
		{
			url: 'https://www.devopsschool.com/video/subversion/svn-fundamental.html',
			title: 'Subversion Fundamental V1',
			
		},
		{
			url: 'https://www.devopsschool.com/video/subversion/svn-fundamental-v2.html',
			title: 'Subversion Fundamental V2',
			
		},
		{
			url: 'https://www.devopsschool.com/video/apache-ant/ant-fundamental-v1.html',
			title: 'Apache Ant Fundamental V1',
			
		},
		{
			url: 'https://www.devopsschool.com/video/apache-ant/ant-fundamental-v2.html',
			title: 'Apache Ant Fundamental V2',
			
		},
		{
			url: 'https://www.devopsschool.com/video/apache-ant/ant-fundamental-v3.html',
			title: 'Apache Ant Fundamental V3',
			
		},
		{
			url: 'https://www.devopsschool.com/video/apache-ant/apache-ant-and-jenkins-fundamental.html',
			title: 'Apache Ant and Jenkins Fundamental',
			
		},
		{
			url: 'https://www.devopsschool.com/video/apache-maven/index.html',
			title: 'Maven',
			
		},
		{
			url: 'https://www.devopsschool.com/video/nant/nant-fundamental.html',
			title: 'NANT Fundamental',
			
		},
		{
			url: 'https://www.devopsschool.com/video/msbuild/msbuild-essential.html',
			title: 'MSBuild Essentials',
			
		},
		{
			url: 'https://www.devopsschool.com/video/nexus/index.html',
			title: 'Nexus Video Collection',
			
		},
		{
			url: 'https://www.devopsschool.com/video/artifactory/index.html',
			title: 'Artifactory',
			
		},
		{
			url: 'https://www.devopsschool.com/video/nuget/git-nuget-fundamental.html',
			title: 'Git and Nuget Fundamental',
			
		},
		{
			url: 'https://www.devopsschool.com/video/packaging/PackageManagementwithLinux.html',
			title: 'Package Management with Linux',
			
		},
		{
			url: 'https://www.devopsschool.com/video/puppet/index.html',
			title: 'Puppet',
			
		},
		{
			url: 'https://www.devopsschool.com/video/chef/index.html',
			title: 'Chef',
			
		},
		{
			url: 'https://www.devopsschool.com/video/ansible/index.html',
			title: 'Ansible',
			
		},
		{
			url: 'https://www.devopsschool.com/video/jenkins/index.html',
			title: 'Jenkins Video Library',
			
		},
		{
			url: 'https://www.devopsschool.com/video/teamcity/index.html',
			title: 'TeamCity Videos Library',
			
		},
		{
			url: 'https://www.devopsschool.com/video/bamboo/index.html',
			title: 'Bamboo Video Gallery',
			
		},
		{
			url: 'https://www.devopsschool.com/video/tfs/index.html',
			title: 'Team Foundation Server Videos Library',
			
		},
		{
			url: 'https://www.devopsschool.com/video/udeploy/index.html',
			title: 'UDeploy Essentials',
			
		},
		{
			url: 'https://www.devopsschool.com/video/jira/index.html',
			title: 'Jira Video Gallery',
			
		},
		{
			url: 'https://www.devopsschool.com/video/sonarqube/index.html',
			title: 'SonarQube Video Gallery',
			
		},
		{
			url: 'https://www.devopsschool.com/video/jacoco/index.html',
			title: 'Jacoco Video Gallery',
			
		},
		{
			url: 'https://www.devopsschool.com/video/linux/bash-scripting/index.html',
			title: 'Bash Scripting',
			
		},
		{
			url: 'https://www.devopsschool.com/video/kubernetes/index.html',
			title: 'Kubernetes',
			
		},
		{
			url: 'https://www.devopsschool.com/video/nagios/index.html',
			title: 'Nagios Video Gallery',
			
		},
		{
			url: 'https://www.devopsschool.com/video/perforce/',
			title: 'Perforce Video Gallery',
			
		},
		{
			url: 'https://www.devopsschool.com/video/splunk/',
			title: 'Splunk Video Gallery',
			
		},
		{
			url: 'https://www.devopsschool.com/video/terraform/',
			title: 'Terraform Video Gallery',
			
		},
			
		
	];
	

}
	
	
	