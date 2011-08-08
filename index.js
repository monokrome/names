// Warning. This will use a lot of memory, but I only use it for inserting
// fake data during development - so, I'm less than worried about it.

var fs = require('fs'),
    name_lists;

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

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
function randomize(count, gender) {
	var current_iter,
	    list,
	    first_name, last_name,
	    current_gender,
	    names = [];

	if (typeof count == 'undefined')
		count = 1;

	if (count < 1)
		throw new Error("I could never produce a negative number of names.");

	current_iter = count;

	if (typeof gender == 'undefined')
		gender = -1;

	else if (gender == 0)
		gender = 'female';

	else if (gender == 1)
		gender = 'male';

	while (current_iter > 0)
	{
		if (!~gender)
		{
			var gender_index = parseInt(Math.random() * 2),

			    first_name_choices = [
			        randomize(1, 'female')[0][0],
			        randomize(1, 'male')[0][0]
			    ];

			first_name = first_name_choices[gender_index];

			if (gender_index == 0)
				current_gender = 'female';
			else
				current_gender = 'male';
		}
		else
		{
			gender = gender.toLowerCase();

			if (gender == 'male')
				list = name_lists.male_first;
			else
				list = name_lists.female_first;

			first_name = list[parseInt(Math.random() * list.length)];
			current_gender = gender;
		}

		last_name = name_lists.last[parseInt(Math.random() * (name_lists.last.length))];

		names.push([capitalize(first_name), capitalize(last_name), current_gender]);

		current_iter = current_iter - 1;
	}

	return names;
}

module.exports = {
	first_names: {
		female: name_lists.female_first,
		male: name_lists.male_first
	},
	last_names: name_lists.last,
	random: randomize
};

