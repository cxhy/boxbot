export BOX_PATH=`pwd | perl -pe "s/boxbot.*/boxbot/"`
alias box='cd $BOX_PATH; pwd; ls -F'
alias box_setup='cd $BOX_PATH/tools/setup; pwd; ls -F'
alias img='cd $BOX_PATH/img; pwd; ls -F'
