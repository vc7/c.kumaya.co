function ComicController($scope) {
	var comics = [];
	for(var i=588; i>=574; i--)
	{
		comics.push(i)
	}
	for(var i=564; i>=416; i--)
	{
		comics.push(i);
	}
	console.log(comics);

	$scope.comics = comics;
	$scope.nextEpisode = 589;
}
