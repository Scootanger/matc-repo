(function() {
  var data = [
    {
      name: 'Blank Line',
      description: 'This extension will add a blank line at the end of your files when you save them!'
      author: 'riccardoNovaglia',
      url: 'https://marketplace.visualstudio.com/items?itemName=riccardoNovaglia.missinglineendoffile',
      downloads: 19315,
      stars: 2,
      price: 10.50,
      selector: 'p1'
    },
    {
      name: 'Path Intellisense',
      description: 'Path intellisense will autocomplete filenames and saves the extra typing.',
      author: 'Christian Kohler',
      url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
      downloads: 4683197,
      stars: 87,
      price: 6.75,
      selector: 'p2'
    },
    {
      name: 'open in browser',
      description: 'Path intellisense will autocomplete filenames and saves the extra typing.',
      author: 'TechER',
      url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
      downloads: 3631562,
      stars: 87,
      price: 3.45,
      selector: 'p3'
    }
  ];

  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
      return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
      return this.stars.toLocaleString();
    };
  }  
  var getTodaysDate = function() {
    var today= new Date();
    return today.toDateString();
  };

  var getEl = function (id) {
    return document.getElementById(id);
  }
  var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');
  

    //Write package to the DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
  }

    dataEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var Blank Line = new Package(data[0]);
    writePackageInfo("Blank-Line");

    var Path Intellisense = new Package(data[1]);
    writePackageInfo("Path-Intellisense");

    var Path open in browser = new Package(data[2]);
    writePackageInfo("open-in-browser");
  }());