if [ $# -eq 0 ]; then
    echo "No arguments Supplied"
else

    for arg in $@; do
        mkdir ex$arg
    done
# mkdir ex$1
fi