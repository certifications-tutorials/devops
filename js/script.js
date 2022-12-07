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
			url: 'ansible/index.html',
			title: 'Ansible',
			
		},
		{
			url: 'apache-ant/index.html',
			title: 'Apache Ant',
			
		},		
		{
			url: 'apache-maven/index.html',
			title: 'Apache Maven',
			
		},
		{
			url: 'artifactory/index.html',
			title: 'Artifactory',
			
		},
		{
			url: 'aws/index.html',
			title: 'Amazon AWS ALL',
			
		},
		{
			url: 'bamboo/index.html',
			title: 'Bamboo Video Gallery',
			
		},
		{
			url: 'chef/index.html',
			title: 'Chef Video Gallery',
			
		},
		{
			url: 'datadog/index.html',
			title: 'Datadog Video Gallery',
		},
		{
			url: 'devops/index.html',
			title: 'DevOps Video Gallery',
		},
		{
			url: 'docker/index.html',
			title: 'Docker Video Library',
			
		},
		{
			url: 'fortify/index.html',
			title: 'Fortify Video Gallery',
		},
		{
			url: 'git/index.html',
			title: 'Git Video Tutorials',
			
		},
		{
			url: 'helix/index.html',
			title: 'Perforce Video Gallery',
			
		},
		{
			url: 'jacoco/index.html',
			title: 'Jacoco Video Gallery',
			
		},
		{
			url: 'jenkins/index.html',
			title: 'Jenkins Video Library',
			
		},
		{
			url: 'jira/index.html',
			title: 'Jira Video Gallery',
			
		},
		{
			url: 'kubernetes/index.html',
			title: 'Kubernetes Video Gallery',
			
		},
		{
			url: 'linux/index.html',
			title: 'Linux',
			
		},
		{
			url: 'msbuild/index.html',
			title: 'MSBuild Essentials',
			
		},
		{
			url: 'nagios/index.html',
			title: 'Nagios Video Gallery',
			
		},
		{
			url: 'nant/index.html',
			title: 'Nant Video Gallery',
			
		},
		{
			url: 'newrelic/index.html',
			title: 'NewRelic Video Gallery',
			
		},
		{
			url: 'nexus/index.html',
			title: 'Nexus Video Gallery',
			
		},
		{
			url: 'nuget/index.html',
			title: 'Nuget Video Gallery',
			
		},
		{
			url: 'octopusdeploy/index.html',
			title: 'Octopus Deploy Video Gallery',
			
		},
		{
			url: 'packaging/index.html',
			title: 'Packaging Video Gallery',
			
		},
		{
			url: 'perl/index.html',
			title: 'Perl Video Gallery',
			
		},
		{
			url: 'puppet/index.html',
			title: 'Puppet Video Gallery',
			
		},
		{
			url: 'sonarqube/index.html',
			title: 'SonarQube Video Gallery',
			
		},
		{
			url: 'splunk/index.html',
			title: 'Splunk Video Gallery',
			
		},
		{
			url: 'subversion/index.html',
			title: 'Subversion Video Gallery',
			
		},
		{
			url: 'teamcity/index.html',
			title: 'TeamCity Videos Library',
			
		},
		{
			url: 'terraform/index.html',
			title: 'Terraform Video Gallery',
		},
		{
			url: 'tfs/index.html',
			title: 'Team Foundation Server Videos Library',
			
		},
		{
			url: 'udeploy/index.html',
			title: 'UDeploy Essentials',
			
		},
		//extras courses videos
		{
			url: '',
			title: 'Bash Scripting',
			
		},
		{
			url: 'devops/DevOps-Essentials.html',
			title: 'DevOps Fundamental',
			
		},
		{
			url: 'devops/Complete-CICD-Implementation-from-Scratch.html',
			title: 'Complete CICD Implementation from Scratch',
			
		},
		{
			url: 'devops/cicd-pipeline-using-jenkins.html',
			title: 'CICD Pipeline Using Jenkins',
			
		},
		{
			url: 'apache-ant/apache-ant-and-jenkins-fundamental.html',
			title: 'Apache Ant and Jenkins Fundamental',
			
		},
		{
			url: 'nuget/git-nuget-fundamental.html',
			title: 'Git and Nuget Fundamental',
			
		},
		{
			url: 'packaging/PackageManagementwithLinux.html',
			title: 'Package Management with Linux',
			
		},		
	];
	

}
	
	
	