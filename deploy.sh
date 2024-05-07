#!/bin/bash
set -e
set -o pipefail

pushd profiles
for profile_js in *.js
do
    cat ../base.js ../lepton.js "$profile_js" > ../out/overrides-"$profile_js"
done
popd
