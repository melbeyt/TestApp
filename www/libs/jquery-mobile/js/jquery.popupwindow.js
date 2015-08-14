


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jquery-popupwindow/jquery.popupwindow.js at master · mkdynamic/jquery-popupwindow</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mkdynamic/jquery-popupwindow" name="twitter:title" /><meta content="jquery-popupwindow - Super simple jQuery popup window plugin" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/4312?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/4312?v=3&amp;s=400" property="og:image" /><meta content="mkdynamic/jquery-popupwindow" property="og:title" /><meta content="https://github.com/mkdynamic/jquery-popupwindow" property="og:url" /><meta content="jquery-popupwindow - Super simple jQuery popup window plugin" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NTcxOTQ5OTpiODljZjY4OTAzZmU4Y2U4ZjRmNTI4YmJlMTA1ZWYwMDo5MzAzMGQzMzdmNjk2N2I1MTc0MTk2MzhlMDlmYzI1MjMxYjYxNzg2YTMyZDg4MTEzNGQ3YmZiYWYxZmI4NThj--f4435af1948944b9d8d07f1df739493123f530b6">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="44AA5003:22E3:2786819:55CAD47A" name="octolytics-dimension-request_id" /><meta content="5719499" name="octolytics-actor-id" /><meta content="Superdragun" name="octolytics-actor-login" /><meta content="e6000bc7ba1370abe26a7131e719bf95b5c7bfefe55dbb5bbfd061f45a21ed67" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="Superdragun">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="HGcv9vu2+YvrVzkkOFQxVD0RAiPhgTqGqjLiJXTN2+FopSrdyq43jsy8i5dWS9S7B0mFVuNWUvlSmLNU8+71Wg==" name="csrf-token" />
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-f3d4668190d304ea0475fe204481ee1bd903d206ef660b4d49fef5a3ec787e67.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-39036e332818bd43446ad24c8e393fa38641927710ecdc9416fa7b8ea9af164f.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="23139bf0e7250fc11a09145717b0a917">

      
  <meta name="description" content="jquery-popupwindow - Super simple jQuery popup window plugin">
  <meta name="go-import" content="github.com/mkdynamic/jquery-popupwindow git https://github.com/mkdynamic/jquery-popupwindow.git">

  <meta content="4312" name="octolytics-dimension-user_id" /><meta content="mkdynamic" name="octolytics-dimension-user_login" /><meta content="1930717" name="octolytics-dimension-repository_id" /><meta content="mkdynamic/jquery-popupwindow" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1930717" name="octolytics-dimension-repository_network_root_id" /><meta content="mkdynamic/jquery-popupwindow" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mkdynamic/jquery-popupwindow/commits/master.atom" rel="alternate" title="Recent Commits to jquery-popupwindow:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mkdynamic/jquery-popupwindow/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/mkdynamic/jquery-popupwindow/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:Superdragun"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="mkdynamic/jquery-popupwindow">This repository</span>
  </div>
    <a class="dropdown-item" href="/mkdynamic/jquery-popupwindow/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/Superdragun"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Superdragun" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/5719499?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">Superdragun</strong>
        </div>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/Superdragun" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gkPKefnCW2ozOS1VCpEEcXQTSTePiBvUlpdH79desO/1uPVq4laNh4rlraaHAsittRbuWzPyw4eH6wN/o7EtuA==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu ">
      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5kamBQQQUWOrUDA2QgV9jaJzVjVYa/w+YpSrhiKxHc76nUiuqgg/Jn1+9uR/XusgfJRvgRYpugSe+22LWKJhGg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="1930717" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/mkdynamic/jquery-popupwindow/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/mkdynamic/jquery-popupwindow/watchers">
          6
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mkdynamic/jquery-popupwindow/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FlW4eqrkgyzcfnoQ5kBt2aLPBUhOEDHkxO9JUKkOTtucACmrszzV9cQtkICWSlboDi9dEMFieyraQoXXewt21g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar mkdynamic/jquery-popupwindow"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/mkdynamic/jquery-popupwindow/stargazers">
          45
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mkdynamic/jquery-popupwindow/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="O/48NIY3swDpbK2npwwmHy5VmKJG5MA3TATJWJNUqSEvjMhu2hMmbkjgDbGZZriZdmEwexjEJVeVxTb46v06yw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star mkdynamic/jquery-popupwindow"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/mkdynamic/jquery-popupwindow/stargazers">
          45
        </a>
</form>  </div>

  </li>

        <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mkdynamic/jquery-popupwindow/fork" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ucTqwRgLie3ndjG4XtKK4eq4rhBzdnwHdWDtrAuJ1Z6LfQysAp62tju4a8kpdD6yyTOC/EFzKI4YNJ/3y4Ejaw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of mkdynamic/jquery-popupwindow to your account"
                aria-label="Fork your own copy of mkdynamic/jquery-popupwindow to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/mkdynamic/jquery-popupwindow/network" class="social-count">26</a>
</form>        </li>

</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
            <span class="mega-octicon octicon-repo"></span>
            <span class="author"><a href="/mkdynamic" class="url fn" itemprop="url" rel="author"><span itemprop="title">mkdynamic</span></a></span><!--
         --><span class="path-divider">/</span><!--
         --><strong><a href="/mkdynamic/jquery-popupwindow" data-pjax="#js-repo-pjax-container">jquery-popupwindow</a></strong>

            <span class="page-context-loader">
              <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
            </span>

          </h1>
        </div>

      </div>
    </div>

      <div class="container">
        <div class="repository-with-sidebar repo-container new-discussion-timeline ">
          <div class="repository-sidebar clearfix">
              

<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/mkdynamic/jquery-popupwindow/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/mkdynamic/jquery-popupwindow" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mkdynamic/jquery-popupwindow">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/mkdynamic/jquery-popupwindow/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mkdynamic/jquery-popupwindow/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/mkdynamic/jquery-popupwindow/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /mkdynamic/jquery-popupwindow/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/mkdynamic/jquery-popupwindow/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /mkdynamic/jquery-popupwindow/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/mkdynamic/jquery-popupwindow/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /mkdynamic/jquery-popupwindow/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

                <div class="only-with-full-nav">
                    
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/mkdynamic/jquery-popupwindow.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:mkdynamic/jquery-popupwindow.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/mkdynamic/jquery-popupwindow" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



  <div class="clone-options">You can clone with
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="D6tPRNfh3JZAKhMxzsh5mYn2z2Z6nE2pLaV1SV0NEqF+WWvECEseJ6zySFaL7bmNiqe9ilrVLK9NdNcjkJbu4w==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="53qmSnWU1ZtXsyUYPQKmcwJnYmlzEbaNLed6ZniW1EjFz3kKBT2tSfay8Lc3fJ/m3YdBYEzBgEUgov+c4mGVPQ==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZH8r5iAUJ4JGnsTBskO910TVrLYnM5XcsuaNN7r3rA9Z3rlncH0mbH5wDJ0PlfbgeeyzDlKCmGfbX6v9c3zdtA==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
    <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
      <span class="octicon octicon-question"></span>
    </a>
  </div>
    <a href="github-windows://openRepo/https://github.com/mkdynamic/jquery-popupwindow" class="btn btn-sm sidebar-button" title="Save mkdynamic/jquery-popupwindow to your computer and use it in GitHub Desktop." aria-label="Save mkdynamic/jquery-popupwindow to your computer and use it in GitHub Desktop.">
      <span class="octicon octicon-desktop-download"></span>
      Clone in Desktop
    </a>

                  <a href="/mkdynamic/jquery-popupwindow/archive/master.zip"
                     class="btn btn-sm sidebar-button"
                     aria-label="Download the contents of mkdynamic/jquery-popupwindow as a zip file"
                     title="Download the contents of mkdynamic/jquery-popupwindow as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>
                </div>
          </div>
          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

            

<a href="/mkdynamic/jquery-popupwindow/blob/3730ccd310a083d415da3c558411f6f2c21f9dc3/jquery.popupwindow.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:9f94000faee67c32aca13be736f6a6df -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mkdynamic/jquery-popupwindow/blob/master/jquery.popupwindow.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mkdynamic/jquery-popupwindow/tree/v1.0.1/jquery.popupwindow.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mkdynamic/jquery-popupwindow/tree/v1.0.0/jquery.popupwindow.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/mkdynamic/jquery-popupwindow/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mkdynamic/jquery-popupwindow" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jquery-popupwindow</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.popupwindow.js</strong>
    </div>
  </div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@lencioni" class="avatar" height="24" src="https://avatars2.githubusercontent.com/u/195534?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/lencioni" rel="contributor">lencioni</a></span>
        <time datetime="2014-04-18T17:19:57Z" is="relative-time">Apr 18, 2014</time>
        <div class="commit-title">
            <a href="/mkdynamic/jquery-popupwindow/commit/ab6fcf47fe1c0eaba4540616e6c04454be2a7313" class="message" data-pjax="true" title="Merge pull request #9 from thorst/center-pare

Center parent">Merge pull request</a> <a href="https://github.com/mkdynamic/jquery-popupwindow/pull/9" class="issue-link" title="Center parent">#9</a> <a href="/mkdynamic/jquery-popupwindow/commit/ab6fcf47fe1c0eaba4540616e6c04454be2a7313" class="message" data-pjax="true" title="Merge pull request #9 from thorst/center-pare

Center parent">from thorst/center-pare</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>3</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mkdynamic" href="/mkdynamic/jquery-popupwindow/commits/master/jquery.popupwindow.js?author=mkdynamic"><img alt="@mkdynamic" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/4312?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lencioni" href="/mkdynamic/jquery-popupwindow/commits/master/jquery.popupwindow.js?author=lencioni"><img alt="@lencioni" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/195534?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="thorst" href="/mkdynamic/jquery-popupwindow/commits/master/jquery.popupwindow.js?author=thorst"><img alt="@thorst" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1334950?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@mkdynamic" height="24" src="https://avatars2.githubusercontent.com/u/4312?v=3&amp;s=48" width="24" />
            <a href="/mkdynamic">mkdynamic</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lencioni" height="24" src="https://avatars2.githubusercontent.com/u/195534?v=3&amp;s=48" width="24" />
            <a href="/lencioni">lencioni</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@thorst" height="24" src="https://avatars3.githubusercontent.com/u/1334950?v=3&amp;s=48" width="24" />
            <a href="/thorst">thorst</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/mkdynamic/jquery-popupwindow/raw/master/jquery.popupwindow.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/mkdynamic/jquery-popupwindow/blame/master/jquery.popupwindow.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/mkdynamic/jquery-popupwindow/commits/master/jquery.popupwindow.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/mkdynamic/jquery-popupwindow?branch=master&amp;filepath=jquery.popupwindow.js"
           aria-label="Open this file in GitHub for Windows"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-desktop-download"></span>
        </a>

            <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mkdynamic/jquery-popupwindow/edit/master/jquery.popupwindow.js" class="inline-form" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BIALiKB9fN01kglXPQ1kf8sCMbkgqcwKPcqVhGzCky2hQWmfncK8WiqKGHcODSqttmXOGTHCL6LS96PALxTBdw==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mkdynamic/jquery-popupwindow/delete/master/jquery.popupwindow.js" class="inline-form" data-form-nonce="80b01e5ab3bd55e090bb15ec2d12b3e986b4cbfc" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qWaOUO6cWwGtOt3sFZ0/d6AlHC5PcSvsm7PDooYpBFv8W3P2y7RDbzB2aeM1BzwG08p93LZEh0GLkJdNinGBmA==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        93 lines (81 sloc)
        <span class="file-info-divider"></span>
      3.631 kB
    </div>
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Display popup window.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Requires: jQuery v1.3.2</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    center<span class="pl-k">:</span>      <span class="pl-s"><span class="pl-pds">&quot;</span>screen<span class="pl-pds">&quot;</span></span>, <span class="pl-c">//true, screen || parent || undefined, null, &quot;&quot;, false</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    createNew<span class="pl-k">:</span>   <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    height<span class="pl-k">:</span>      <span class="pl-c1">500</span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    left<span class="pl-k">:</span>        <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    location<span class="pl-k">:</span>    <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    menubar<span class="pl-k">:</span>     <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">    name<span class="pl-k">:</span>        <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">onUnload</span><span class="pl-k">:</span>    <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    resizable<span class="pl-k">:</span>   <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    scrollbars<span class="pl-k">:</span>  <span class="pl-c1">false</span>, <span class="pl-c">// os x always adds scrollbars</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    status<span class="pl-k">:</span>      <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    toolbar<span class="pl-k">:</span>     <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    top<span class="pl-k">:</span>         <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    width<span class="pl-k">:</span>       <span class="pl-c1">500</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$</span>.<span class="pl-en">popupWindow</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">url</span>, <span class="pl-smi">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> options <span class="pl-k">=</span> $.<span class="pl-c1">extend</span>({}, defaults, opts);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// center the window</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (options.<span class="pl-c1">center</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>parent<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">      options.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenY</span> <span class="pl-k">+</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(($(<span class="pl-c1">window</span>).<span class="pl-c1">height</span>() <span class="pl-k">-</span> options.<span class="pl-c1">height</span>) / <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      options.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenX</span> <span class="pl-k">+</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(($(<span class="pl-c1">window</span>).<span class="pl-c1">width</span>() <span class="pl-k">-</span> options.<span class="pl-c1">width</span>) / <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (options.<span class="pl-c1">center</span> <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">||</span> options.<span class="pl-c1">center</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>screen<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// 50px is a rough estimate for the height of the chrome above the</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// document area</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// take into account the current monitor the browser is on</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// this works in Firefox, Chrome, but in IE there is a bug </span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// https://connect.microsoft.com/IE/feedback/details/856470/ie11-javascript-screen-height-still-gives-wrong-value-on-secondary-monitor</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// IE reports the primary monitor resolution. So, if you have multiple monitors IE will</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// ALWAYS return the resolution of the primary monitor. This is a bug, and there is an</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// open ticket with IE for it. In chrome and firefox it returns the monitor that the</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// browser is currently located on. If the browser spans multiple monitors, whichever</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// monitor the browser has the most real estate on, is the monitor it returns the size for.</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// What this means to the end users:</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// If they have multiple monitors, and their multiple monitors have different resolutions,</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// and they use internet explorer, and the browser is currently located on a secondary</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// monitor, the centering will not be perfect as it will be based on the primary monitors</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// resolution. As you can tell this is pretty edge case.</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> screenLeft <span class="pl-k">=</span> (<span class="pl-k">typeof</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenLeft</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenLeft</span> <span class="pl-k">:</span> <span class="pl-c1">screen</span>.<span class="pl-c1">left</span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">      options.<span class="pl-c1">top</span> <span class="pl-k">=</span> ((<span class="pl-c1">screen</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> options.<span class="pl-c1">height</span>) / <span class="pl-c1">2</span>) <span class="pl-k">-</span> <span class="pl-c1">50</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      options.<span class="pl-c1">left</span> <span class="pl-k">=</span> screenLeft <span class="pl-k">+</span> (<span class="pl-c1">screen</span>.<span class="pl-c1">width</span> <span class="pl-k">-</span> options.<span class="pl-c1">width</span>) / <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// params</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> params <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>location=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (options.<span class="pl-c1">location</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>menubar=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (options.<span class="pl-c1">menubar</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>toolbar=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (options.<span class="pl-c1">toolbar</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>scrollbars=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (options.<span class="pl-c1">scrollbars</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>status=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (options.<span class="pl-c1">status</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>resizable=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (options.<span class="pl-c1">resizable</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yes<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>height=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> options.<span class="pl-c1">height</span>);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>width=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> options.<span class="pl-c1">width</span>);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>left=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> options.<span class="pl-c1">left</span>);</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    params.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>top=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> options.<span class="pl-c1">top</span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// open window</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> random <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> name <span class="pl-k">=</span> options.<span class="pl-c1">name</span> <span class="pl-k">||</span> (options.<span class="pl-c1">createNew</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>popup_window_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> random <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>popup_window<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> win <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">open</span>(url, name, params.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// unload handler</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (options.<span class="pl-c1">onUnload</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> options.<span class="pl-c1">onUnload</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> unloadInterval <span class="pl-k">=</span> <span class="pl-c1">setInterval</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>win <span class="pl-k">||</span> win.<span class="pl-c1">closed</span>) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">clearInterval</span>(unloadInterval);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">          options.<span class="pl-c1">onUnload</span>();</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-c1">50</span>);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// focus window</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (win <span class="pl-k">&amp;&amp;</span> win.<span class="pl-c1">focus</span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      win.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// return handle to window</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> win;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">})(jQuery);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

          </div>
        </div>
        <div class="modal-backdrop"></div>
      </div>
  </div>


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05884s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" aria-label=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-cbe05584069bb7341a0151e138a3b946607b2f13ea9dbb1f9a07d5a2f1f8b01b.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-abe96c86767e81ed38aac7dbbfc92a2ad063ae49689324f429cddb19c7ebddd3.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

