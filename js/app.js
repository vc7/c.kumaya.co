function ComicController($scope) {
	var comics = [];
	for(var i=476; i>=416; i--)
	{
		comics.push(i);
	}
	console.log(comics);

	$scope.comics = comics;
	$scope.nextEpisode = 477;
}
