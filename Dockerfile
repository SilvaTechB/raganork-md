RUN git clone https://github.com/souravkl11/raganork-md
WORKDIR cd raganork-md
ENV TZ=Asia/Kolkata
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
