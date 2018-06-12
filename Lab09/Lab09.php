<?php
include 'travel-data.inc.php';




?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Chapter 12</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    
    
    <link rel="stylesheet" href="css/bootstrap-theme.css" />
    <link rel="stylesheet" href="css/captions.css" />

</head>

<body>
    <?php include 'header.inc.php'; ?>
    


    <!-- Page Content -->
    <main class="container">
     
        
        <div class="btn-group countryButtons" role="group" aria-label="...">
              <a role="button" class="btn btn-default" href="list.php">All</a>
			   
           
              <?php
			  $button = array("Canada","Germany" ,"Greece","Italy","United Kingdom"," United States");
			   $length = count($button);
			  for($i = 0;$i < $length;$i++){
			  	echo "<a role='button' class='btn btn-default' href='list.php?country=$button[$i]'>$button[$i]</a>";
			  }
              ?>
                     
        </div>               
           
        

		<ul class="caption-style-2">
         
          <?php   
          $image = array(
		  array(22,"View of Cologne","6114850721.jpg"),
		  array(54,"Arch of Septimus Severus","9495574327.jpg"),
		  array(7,"Lunenburg Port","5856697109.jpg"),
		  array(19,"British Museum","5855729828.jpg"),
		  array(46,"Temple of Hephaistos","8711645510.jpg"),
		  array(6,"At the top of Sulpher Mountain","6114907897.jpg"),
		  array(60,"Pazzi Chapel at Santa Croce","9504609042.jpg"),
		  array(58,"Florence Duomo","9498358806.jpg"),
		  array(75,"Ancient Theatre of Dionysos","8710513053.jpg"),
		  array(77,"Dusk on Santorini","8710247776.jpg"),
		  array(27,"New National Gallery","6114867983.jpg"),
		  array(2,"Calgary Downtown","6592914823.jpg"),
		  array(24,"Downtown Frankfurt","6114960821.jpg"),
		  array(13,"Central Park","6596048341.jpg"),
		  array(101,"Seattle Scene","21587937686.jpg"),
		  array(102,"Millennium Park Chicago","22182041615.jpg")
		  );
		  $length = count($image);
		  for($i = 0;$i < $length;$i++){
		  	echo "<li>
                <a href='detail.php?id = {$image[$i][0]}' class='img-responsive'>
				<img src='images/square/{$image[$i][2]}' alt={$image[$i][1]}>
				<div class='caption'>
					<div class='blur'></div>
					<div class='caption-text'>
						<h1>{$image[$i][1]}</h1>
					</div>
				</div>
                    </a>
			</li>";
		  }
          ?>

       </ul>       

      
    </main>
    
    <footer>
        <div class="container-fluid">
                    <div class="row final">
                <p>Copyright &copy; 2017 Creative Commons ShareAlike</p>
                <p><a href="#">Home</a> / <a href="#">About</a> / <a href="#">Contact</a> / <a href="#">Browse</a></p>
            </div>            
        </div>
        

    </footer>


        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>

</html>