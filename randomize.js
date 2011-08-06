// THIS DOESN'T WORK YET.

// Warning. This will use a lot of memory, but I only use it for inserting
// fake data during development - so, I'm less than worried about it.

var fs = require('fs'),
    name_lists;

function read_list (filename) {
	return JSON.parse(fs.readFileSync(filename));
}

name_lists = {
	female_first: read_list('us_female_first_names.json'),
	male_first: read_list('us_male_first_names.json'),
	last: read_list('us_last_names.json'),
}

/**
 * This is a really slow algorithm, but it's also only 3 minutes of code. If
 * you want to make it faster, a pull request would be nice. :)
 */
function random_names(count, gender) {
	var current_iter = count,
	    list,
	    first_name, last_name,
	    names = [];

	if (typeof count == 'undefined')
		count = 1;

	if (count < 1)
		throw new Error("I could never produce a negative number of names.");

	if (typeof gender == 'undefined')
		gender = -1;

	else if (gender == 0)
		gender == 'female';

	else if (gender == 1)
		gender = 'male';

	while (current_iter > 0)
	{
		if (!~gender)
		{
			var first_name_choices = [
				random_names(1, 0),
				random_names(2, 1)
			];

			first_name = first_name_choices[parseInt(Math.random()*2)-1];
		}
		else
		{
			// Female.
			if (gender == 1)
				list = name_lists.female_first;
			else
				list = name_lists.male_first;

			first_name = list[parseInt(Math.random() * list.length) - 1];
		}

		last_name = Math.random() * (name_lists.last.length-1);

		names.push(first_name + ' ' + last_name);

		current_iter = current_iter - 1;
	}

	return names;
}

module.exports = random_names;

