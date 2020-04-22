aws cloudfront create-invalidation \
      --distribution-id $CLOUDFRONT_DIST_ID \
          --paths /*
