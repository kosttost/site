<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Spec_Tech
 */

	$page_vault = get_page_by_title( 'vault page' );
	$page_vault_id = $page_vault->ID;
	$permalink_to_vault = get_permalink( $page_vault_id );
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head lang="en" class="color-scheme-light">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title><?php bloginfo( 'name' ); ?></title>
    
    <link rel="shortcut icon" href="favicon.ico" type="image/png">
    <link rel="apple-touch-icon" href="<?php bloginfo('template_url'); ?>/img/152_badge.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php bloginfo('template_url'); ?>/img/152_badge.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php bloginfo('template_url'); ?>/img/152_badge.png">
    <link rel="apple-touch-startup-image" href="https://storage.googleapis.com/public-dao-pad-dev/assets/img/favicons/152_badge.png">

    <link rel="preconnect" href="https:/../fonts.gstatic.com">

    <meta name="color-scheme" content="light dark">
    <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!-- <link rel="preload" href="assets../fonts/inter/Inter-Medium.ttf" as="font" crossorigin="anonymous">
    <link rel="preload" href="assets../fonts/inter/Inter-Black-slnt=0.ttf" as="font" crossorigin="anonymous"> -->
    <link rel="preload" as="image" href="https://ik.imagekit.io/eeaujkgpcw/hero_image_P3rCEDOUBoS.png">
    <!-- <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/fromHTML.css"> -->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">

<header-nav-bar _nghost-krj-c63>
	<header _ngcontent-krj-c63 class="primary-header">
			<div _ngcontent-krj-c63 class="container">
					<div _ngcontent-krj-c63 class="row justify-content-between">
							<div _ngcontent-krj-c63 class="col-sm-4 col-6 align-self-center col_logo col-lg-3">
									<a _ngcontent-krj-c63 routerlink="/" routerdirection="forward" class="site-logo" href="/"><img _ngcontent-krj-c63 src="<?php bloginfo('template_url'); ?>/img/logo-dark.svg" width="200" height="44" alt="<?php bloginfo( 'name' ); ?>" class="img-fluid ng-star-inserted">
											<!---->
											<!---->
									</a>
							</div>
							<div _ngcontent-krj-c63 class="align-self-center align-center main_menu d-none d-lg-block col">
									<ul _ngcontent-krj-c63 class="nav">
											<li _ngcontent-krj-c63><a _ngcontent-krj-c63 target="_blank" href="https://learn.daomaker.com/"> LEARN </a></li>
											<li _ngcontent-krj-c63><a _ngcontent-krj-c63 href="<?php echo $permalink_to_vault ?>"> VAULTS </a></li>
											<li _ngcontent-krj-c63 class="menu-item"><a _ngcontent-krj-c63 target="_blank"> SUPPORT </a></li>
									</ul>
							</div>
							<div _ngcontent-krj-c63 class="col-lg-5 col-sm-8 col-6 isLoggedIn align-self-center align-right col_side_menu ng-star-inserted">
									<ul _ngcontent-krj-c63 class="nav side_menu">
											<!-- <li _ngcontent-krj-c63 class="d-none d-lg-inline-block">
													<a _ngcontent-krj-c63 routerlink="/login" routerdirection="root" routerlinkactive="active-link" class="btn outline" href="/login">
															<div _ngcontent-krj-c63 class="inner"><span _ngcontent-krj-c63 data-text="SIGN IN">SIGN IN</span></div>
													</a>
											</li> -->
											<li _ngcontent-krj-c63>
													<a _ngcontent-krj-c63 class="btn outline wallet blue position-relative">
															<!---->
															<!----><span _ngcontent-krj-c63 class="status disconnected ng-star-inserted" href="<?php echo $permalink_to_vault ?>"> Connect Wallet </span>
															<!---->
													</a>
													<!---->
											</li>
											<!-- <li _ngcontent-krj-c63 class="d-none d-lg-inline-block">
													<a _ngcontent-krj-c63 routerlink="/register" routerdirection="root" routerlinkactive="active-link" class="btn" href="/register">
															<div _ngcontent-krj-c63 class="inner"><span _ngcontent-krj-c63 data-text="REGISTER">REGISTER</span></div>
													</a>
											</li> -->
											<li _ngcontent-krj-c63 class="d-lg-none">
													<div _ngcontent-krj-c63 id="gnavBtn" class="menu-toggle"><span _ngcontent-krj-c63></span></div>
											</li>
									</ul>
							</div>
							<!---->
							<!---->
							<!---->
					</div>
					<div _ngcontent-krj-c63 id="overlay" class="overlay">
							<div _ngcontent-krj-c63 id="mobile-menu-scroller" slimscroll>
									<ul _ngcontent-krj-c63 id="mobile-menu" class="nav">
											<li _ngcontent-krj-c63 class="menu-item"><a _ngcontent-krj-c63 target="_blank"> LEARN </a></li>
											<li _ngcontent-krj-c63 class="menu-item"><a _ngcontent-krj-c63 routerlink="/vault" routerdirection="root" routerlinkactive="active-link" href="/vault"> STAKING </a></li>
											<li _ngcontent-krj-c63 class="menu-item"><a _ngcontent-krj-c63 target="_blank"> SUPPORT </a></li>
									</ul>
									<ul _ngcontent-krj-c63 class="nav side_menu_mobile ng-star-inserted">
											<li _ngcontent-krj-c63 class="menu-item">
													<a _ngcontent-krj-c63 routerlink="/login" routerdirection="root" routerlinkactive="active-link" class="btn" href="/login">
															<div _ngcontent-krj-c63 class="inner"><span _ngcontent-krj-c63 data-text="SIGN IN">SIGN IN</span></div>
													</a>
											</li>
											<li _ngcontent-krj-c63 class="menu-item">
													<a _ngcontent-krj-c63 routerlink="/register" routerdirection="root" routerlinkactive="active-link" class="btn" href="/register">
															<div _ngcontent-krj-c63 class="inner"><span _ngcontent-krj-c63 data-text="REGISTER">REGISTER</span></div>
													</a>
											</li>
									</ul>
									<!---->
									<!---->
									<!---->
							</div>
					</div>
			</div>
			<!---->
	</header>
	<div _ngcontent-krj-c63 class="overlay-shadow"></div>
	<!---->
</header-nav-bar>
