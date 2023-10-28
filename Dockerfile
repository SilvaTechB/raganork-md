FROM quay.io/souravkl11/rgnk-v3:latest

RUN git clone https://github.com/souravkl11/raganork-md /railway/Raganork
WORKDIR /railway/Raganork
ENV TZ=Asia/Kolkata

COPY config.js /railway/Raganork

RUN yarn install --network-concurrency 1

EXPOSE 3000
CMD node index.js